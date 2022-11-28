import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Api2ModelsLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=City, form, name=City;" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=Country, form, name=Country;" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=DMA, form, name=DMA;" })
  dma?: number;
}
