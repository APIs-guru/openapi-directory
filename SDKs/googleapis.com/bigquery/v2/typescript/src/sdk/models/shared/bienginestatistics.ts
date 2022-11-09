import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BiEngineReason } from "./bienginereason";


export class BiEngineStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=biEngineMode" })
  biEngineMode?: string;

  @Metadata({ data: "json, name=biEngineReasons", elemType: shared.BiEngineReason })
  biEngineReasons?: BiEngineReason[];
}
