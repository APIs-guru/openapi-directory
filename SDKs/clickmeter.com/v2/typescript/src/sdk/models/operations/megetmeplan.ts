import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeGetMePlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoAccountingPlan?: shared.ApiCoreDtoAccountingPlan;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
