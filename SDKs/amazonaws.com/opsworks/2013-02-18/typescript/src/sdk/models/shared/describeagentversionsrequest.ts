import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StackConfigurationManager } from "./stackconfigurationmanager";



export class DescribeAgentVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationManager" })
  configurationManager?: StackConfigurationManager;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}
