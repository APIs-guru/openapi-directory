import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeClientPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceIds" })
  resourceIds: string[];
}
