import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountGetPlanResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoAccountingPlan?: shared.ApiCoreDtoAccountingPlan;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
