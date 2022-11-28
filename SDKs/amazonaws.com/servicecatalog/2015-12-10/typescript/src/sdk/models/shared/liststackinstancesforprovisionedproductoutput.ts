import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StackInstance } from "./stackinstance";



export class ListStackInstancesForProvisionedProductOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StackInstances", elemType: StackInstance })
  stackInstances?: StackInstance[];
}
