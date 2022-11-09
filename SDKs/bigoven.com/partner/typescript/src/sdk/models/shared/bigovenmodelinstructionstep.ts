import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BigOvenModelInstructionStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndGantt" })
  endGantt?: number;

  @Metadata({ data: "json, name=StartGantt" })
  startGantt?: number;

  @Metadata({ data: "json, name=Text" })
  text?: string;
}
