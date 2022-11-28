import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Ommeters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentScalingFactor" })
  currentScalingFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=loadProfileType" })
  loadProfileType?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturerId" })
  manufacturerId?: string;

  @SpeakeasyMetadata({ data: "json, name=measurementType" })
  measurementType?: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: string;

  @SpeakeasyMetadata({ data: "json, name=meterId" })
  meterId?: string;

  @SpeakeasyMetadata({ data: "json, name=scalingFactor" })
  scalingFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=voltageScalingFactor" })
  voltageScalingFactor?: number;
}
