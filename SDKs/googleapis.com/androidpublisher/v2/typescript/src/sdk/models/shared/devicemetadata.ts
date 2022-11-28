import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeviceMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cpuMake?: string;

  @SpeakeasyMetadata()
  cpuModel?: string;

  @SpeakeasyMetadata()
  deviceClass?: string;

  @SpeakeasyMetadata()
  glEsVersion?: number;

  @SpeakeasyMetadata()
  manufacturer?: string;

  @SpeakeasyMetadata()
  nativePlatform?: string;

  @SpeakeasyMetadata()
  productName?: string;

  @SpeakeasyMetadata()
  ramMb?: number;

  @SpeakeasyMetadata()
  screenDensityDpi?: number;

  @SpeakeasyMetadata()
  screenHeightPx?: number;

  @SpeakeasyMetadata()
  screenWidthPx?: number;
}
