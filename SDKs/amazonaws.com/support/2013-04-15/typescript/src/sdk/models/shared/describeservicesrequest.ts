import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceCodeList" })
  serviceCodeList?: string[];
}
