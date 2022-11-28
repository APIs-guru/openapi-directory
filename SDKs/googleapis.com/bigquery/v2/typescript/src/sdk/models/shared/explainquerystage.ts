import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExplainQueryStep } from "./explainquerystep";



export class ExplainQueryStage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completedParallelInputs" })
  completedParallelInputs?: string;

  @SpeakeasyMetadata({ data: "json, name=computeMsAvg" })
  computeMsAvg?: string;

  @SpeakeasyMetadata({ data: "json, name=computeMsMax" })
  computeMsMax?: string;

  @SpeakeasyMetadata({ data: "json, name=computeRatioAvg" })
  computeRatioAvg?: number;

  @SpeakeasyMetadata({ data: "json, name=computeRatioMax" })
  computeRatioMax?: number;

  @SpeakeasyMetadata({ data: "json, name=endMs" })
  endMs?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=inputStages" })
  inputStages?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parallelInputs" })
  parallelInputs?: string;

  @SpeakeasyMetadata({ data: "json, name=readMsAvg" })
  readMsAvg?: string;

  @SpeakeasyMetadata({ data: "json, name=readMsMax" })
  readMsMax?: string;

  @SpeakeasyMetadata({ data: "json, name=readRatioAvg" })
  readRatioAvg?: number;

  @SpeakeasyMetadata({ data: "json, name=readRatioMax" })
  readRatioMax?: number;

  @SpeakeasyMetadata({ data: "json, name=recordsRead" })
  recordsRead?: string;

  @SpeakeasyMetadata({ data: "json, name=recordsWritten" })
  recordsWritten?: string;

  @SpeakeasyMetadata({ data: "json, name=shuffleOutputBytes" })
  shuffleOutputBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=shuffleOutputBytesSpilled" })
  shuffleOutputBytesSpilled?: string;

  @SpeakeasyMetadata({ data: "json, name=slotMs" })
  slotMs?: string;

  @SpeakeasyMetadata({ data: "json, name=startMs" })
  startMs?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: ExplainQueryStep })
  steps?: ExplainQueryStep[];

  @SpeakeasyMetadata({ data: "json, name=waitMsAvg" })
  waitMsAvg?: string;

  @SpeakeasyMetadata({ data: "json, name=waitMsMax" })
  waitMsMax?: string;

  @SpeakeasyMetadata({ data: "json, name=waitRatioAvg" })
  waitRatioAvg?: number;

  @SpeakeasyMetadata({ data: "json, name=waitRatioMax" })
  waitRatioMax?: number;

  @SpeakeasyMetadata({ data: "json, name=writeMsAvg" })
  writeMsAvg?: string;

  @SpeakeasyMetadata({ data: "json, name=writeMsMax" })
  writeMsMax?: string;

  @SpeakeasyMetadata({ data: "json, name=writeRatioAvg" })
  writeRatioAvg?: number;

  @SpeakeasyMetadata({ data: "json, name=writeRatioMax" })
  writeRatioMax?: number;
}
