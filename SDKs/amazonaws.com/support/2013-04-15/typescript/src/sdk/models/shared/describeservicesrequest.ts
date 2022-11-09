import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeServicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=serviceCodeList" })
  serviceCodeList?: string[];
}
