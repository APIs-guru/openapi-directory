import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GitCreateTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


// GitCreateTagRequestBodyTagger
/** 
 * An object with information about the individual creating the tag.
**/
export class GitCreateTagRequestBodyTagger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export enum GitCreateTagRequestBodyTypeEnum {
    Commit = "commit",
    Tree = "tree",
    Blob = "blob"
}


export class GitCreateTagRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: string;

  @SpeakeasyMetadata({ data: "json, name=tagger" })
  tagger?: GitCreateTagRequestBodyTagger;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GitCreateTagRequestBodyTypeEnum;
}


export class GitCreateTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GitCreateTagPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: GitCreateTagRequestBody;
}


export class GitCreateTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  gitTag?: shared.GitTag;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
