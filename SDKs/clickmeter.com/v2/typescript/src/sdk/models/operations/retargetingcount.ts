import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetargetingCountResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
