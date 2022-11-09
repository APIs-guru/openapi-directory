import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClientPropertiesResult } from "./clientpropertiesresult";


export class DescribeClientPropertiesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientPropertiesList", elemType: shared.ClientPropertiesResult })
  clientPropertiesList?: ClientPropertiesResult[];
}
