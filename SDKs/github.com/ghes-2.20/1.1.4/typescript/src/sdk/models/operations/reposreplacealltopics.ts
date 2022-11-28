import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposReplaceAllTopicsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposReplaceAllTopicsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=names" })
  names: string[];
}


export class ReposReplaceAllTopics415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class ReposReplaceAllTopicsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposReplaceAllTopicsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposReplaceAllTopicsRequestBody;
}


export class ReposReplaceAllTopicsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  reposReplaceAllTopics415ApplicationJsonObject?: ReposReplaceAllTopics415ApplicationJson;

  @SpeakeasyMetadata()
  topic?: shared.Topic;

  @SpeakeasyMetadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
