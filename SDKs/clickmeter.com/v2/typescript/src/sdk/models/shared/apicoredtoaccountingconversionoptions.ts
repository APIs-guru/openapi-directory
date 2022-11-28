import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCoreDtoAccountingConversionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hideComCost, form, name=hideComCost;" })
  hideComCost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hideCost, form, name=hideCost;" })
  hideCost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hideCount, form, name=hideCount;" })
  hideCount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hideParams, form, name=hideParams;" })
  hideParams?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hideValue, form, name=hideValue;" })
  hideValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=percentCommission, form, name=percentCommission;" })
  percentCommission?: number;

  @SpeakeasyMetadata({ data: "json, name=percentValue, form, name=percentValue;" })
  percentValue?: number;
}
