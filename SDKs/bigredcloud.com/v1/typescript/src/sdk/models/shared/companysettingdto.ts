import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompanySettingDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableVOCRReporting" })
  enableVocrReporting?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=useAllocations" })
  useAllocations?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: string;

  @Metadata({ data: "json, name=vocrSettingValue" })
  vocrSettingValue?: boolean;
}
