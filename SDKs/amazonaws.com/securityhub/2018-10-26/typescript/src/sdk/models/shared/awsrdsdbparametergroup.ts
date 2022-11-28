import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRdsDbParameterGroup
/** 
 * Provides information about a parameter group for a DB instance.
**/
export class AwsRdsDbParameterGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DbParameterGroupName" })
  dbParameterGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterApplyStatus" })
  parameterApplyStatus?: string;
}
