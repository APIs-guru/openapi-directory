import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AdClient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arcOptIn" })
  arcOptIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=supportsReporting" })
  supportsReporting?: boolean;
}
