import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompanySettingDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableVOCRReporting" })
  enableVocrReporting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=useAllocations" })
  useAllocations?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=vocrSettingValue" })
  vocrSettingValue?: boolean;
}
