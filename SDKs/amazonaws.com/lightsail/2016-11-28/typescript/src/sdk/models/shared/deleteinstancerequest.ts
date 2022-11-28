import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=forceDeleteAddOns" })
  forceDeleteAddOns?: boolean;

  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;
}
