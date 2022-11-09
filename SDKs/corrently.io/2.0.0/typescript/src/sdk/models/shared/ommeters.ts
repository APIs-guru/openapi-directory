import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Ommeters extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentScalingFactor" })
  currentScalingFactor?: number;

  @Metadata({ data: "json, name=loadProfileType" })
  loadProfileType?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=manufacturerId" })
  manufacturerId?: string;

  @Metadata({ data: "json, name=measurementType" })
  measurementType?: string;

  @Metadata({ data: "json, name=meta" })
  meta?: string;

  @Metadata({ data: "json, name=meterId" })
  meterId?: string;

  @Metadata({ data: "json, name=scalingFactor" })
  scalingFactor?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=voltageScalingFactor" })
  voltageScalingFactor?: number;
}
