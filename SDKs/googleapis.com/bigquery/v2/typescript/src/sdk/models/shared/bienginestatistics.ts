import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BiEngineReason } from "./bienginereason";



export class BiEngineStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=biEngineMode" })
  biEngineMode?: string;

  @SpeakeasyMetadata({ data: "json, name=biEngineReasons", elemType: BiEngineReason })
  biEngineReasons?: BiEngineReason[];
}
