import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApiKeyFindCurrentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKeyEntity?: shared.ApiKeyEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
