import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AdsenseReportsGenerateResponseHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AdsenseReportsGenerateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averages" })
  averages?: string[];

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: AdsenseReportsGenerateResponseHeaders })
  headers?: AdsenseReportsGenerateResponseHeaders[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: string[][];

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=totalMatchedRows" })
  totalMatchedRows?: string;

  @SpeakeasyMetadata({ data: "json, name=totals" })
  totals?: string[];

  @SpeakeasyMetadata({ data: "json, name=warnings" })
  warnings?: string[];
}
