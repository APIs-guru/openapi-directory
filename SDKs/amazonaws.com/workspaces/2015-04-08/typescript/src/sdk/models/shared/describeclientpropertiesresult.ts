import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientPropertiesResult } from "./clientpropertiesresult";



export class DescribeClientPropertiesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientPropertiesList", elemType: ClientPropertiesResult })
  clientPropertiesList?: ClientPropertiesResult[];
}
