import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoAccountingConversionOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=hideComCost, form, name=hideComCost;" })
  hideComCost?: boolean;

  @Metadata({ data: "json, name=hideCost, form, name=hideCost;" })
  hideCost?: boolean;

  @Metadata({ data: "json, name=hideCount, form, name=hideCount;" })
  hideCount?: boolean;

  @Metadata({ data: "json, name=hideParams, form, name=hideParams;" })
  hideParams?: boolean;

  @Metadata({ data: "json, name=hideValue, form, name=hideValue;" })
  hideValue?: boolean;

  @Metadata({ data: "json, name=percentCommission, form, name=percentCommission;" })
  percentCommission?: number;

  @Metadata({ data: "json, name=percentValue, form, name=percentValue;" })
  percentValue?: number;
}
