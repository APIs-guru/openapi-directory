import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StackInstance } from "./stackinstance";


export class ListStackInstancesForProvisionedProductOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=StackInstances", elemType: shared.StackInstance })
  stackInstances?: StackInstance[];
}
