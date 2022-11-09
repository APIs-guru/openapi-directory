import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiKeysIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiKeysIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiKeysIdPathParams;
}


export class GetApiKeysIdResponse extends SpeakeasyBase {
  @Metadata()
  apiKeyEntity?: shared.ApiKeyEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
