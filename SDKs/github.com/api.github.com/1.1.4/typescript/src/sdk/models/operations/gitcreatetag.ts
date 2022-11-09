import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GitCreateTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


// GitCreateTagRequestBodyTagger
/** 
 * An object with information about the individual creating the tag.
**/
export class GitCreateTagRequestBodyTagger extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}

export enum GitCreateTagRequestBodyTypeEnum {
    Commit = "commit"
,    Tree = "tree"
,    Blob = "blob"
}


export class GitCreateTagRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=object" })
  object: string;

  @Metadata({ data: "json, name=tag" })
  tag: string;

  @Metadata({ data: "json, name=tagger" })
  tagger?: GitCreateTagRequestBodyTagger;

  @Metadata({ data: "json, name=type" })
  type: GitCreateTagRequestBodyTypeEnum;
}


export class GitCreateTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GitCreateTagPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: GitCreateTagRequestBody;
}


export class GitCreateTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  gitTag?: shared.GitTag;

  @Metadata()
  validationError?: shared.ValidationError;
}
