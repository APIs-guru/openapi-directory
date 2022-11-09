import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Api2ModelsLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=City, form, name=City;" })
  city?: string;

  @Metadata({ data: "json, name=Country, form, name=Country;" })
  country?: string;

  @Metadata({ data: "json, name=DMA, form, name=DMA;" })
  dma?: number;
}
