import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposReplaceAllTopicsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposReplaceAllTopicsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=names" })
  names: string[];
}


export class ReposReplaceAllTopicsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposReplaceAllTopicsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposReplaceAllTopicsRequestBody;
}


export class ReposReplaceAllTopics415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ReposReplaceAllTopicsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  reposReplaceAllTopics415ApplicationJsonObject?: ReposReplaceAllTopics415ApplicationJson;

  @Metadata()
  topic?: shared.Topic;

  @Metadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
