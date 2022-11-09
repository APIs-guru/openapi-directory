import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AdClient extends SpeakeasyBase {
  @Metadata({ data: "json, name=arcOptIn" })
  arcOptIn?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=productCode" })
  productCode?: string;

  @Metadata({ data: "json, name=supportsReporting" })
  supportsReporting?: boolean;
}
