import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=forceDeleteAddOns" })
  forceDeleteAddOns?: boolean;

  @Metadata({ data: "json, name=instanceName" })
  instanceName: string;
}
