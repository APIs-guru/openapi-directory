import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWorkforceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkforceName" })
  workforceName: string;
}
