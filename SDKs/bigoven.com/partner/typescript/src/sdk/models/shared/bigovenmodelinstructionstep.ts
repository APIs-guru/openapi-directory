import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BigOvenModelInstructionStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndGantt" })
  endGantt?: number;

  @SpeakeasyMetadata({ data: "json, name=StartGantt" })
  startGantt?: number;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;
}
