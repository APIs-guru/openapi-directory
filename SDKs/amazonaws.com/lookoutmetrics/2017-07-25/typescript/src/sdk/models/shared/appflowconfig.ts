import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppFlowConfig
/** 
 * Details about an Amazon AppFlow flow datasource.
**/
export class AppFlowConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FlowName" })
  flowName: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
