import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExplainQueryStep } from "./explainquerystep";


export class ExplainQueryStage extends SpeakeasyBase {
  @Metadata({ data: "json, name=completedParallelInputs" })
  completedParallelInputs?: string;

  @Metadata({ data: "json, name=computeMsAvg" })
  computeMsAvg?: string;

  @Metadata({ data: "json, name=computeMsMax" })
  computeMsMax?: string;

  @Metadata({ data: "json, name=computeRatioAvg" })
  computeRatioAvg?: number;

  @Metadata({ data: "json, name=computeRatioMax" })
  computeRatioMax?: number;

  @Metadata({ data: "json, name=endMs" })
  endMs?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=inputStages" })
  inputStages?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parallelInputs" })
  parallelInputs?: string;

  @Metadata({ data: "json, name=readMsAvg" })
  readMsAvg?: string;

  @Metadata({ data: "json, name=readMsMax" })
  readMsMax?: string;

  @Metadata({ data: "json, name=readRatioAvg" })
  readRatioAvg?: number;

  @Metadata({ data: "json, name=readRatioMax" })
  readRatioMax?: number;

  @Metadata({ data: "json, name=recordsRead" })
  recordsRead?: string;

  @Metadata({ data: "json, name=recordsWritten" })
  recordsWritten?: string;

  @Metadata({ data: "json, name=shuffleOutputBytes" })
  shuffleOutputBytes?: string;

  @Metadata({ data: "json, name=shuffleOutputBytesSpilled" })
  shuffleOutputBytesSpilled?: string;

  @Metadata({ data: "json, name=slotMs" })
  slotMs?: string;

  @Metadata({ data: "json, name=startMs" })
  startMs?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=steps", elemType: shared.ExplainQueryStep })
  steps?: ExplainQueryStep[];

  @Metadata({ data: "json, name=waitMsAvg" })
  waitMsAvg?: string;

  @Metadata({ data: "json, name=waitMsMax" })
  waitMsMax?: string;

  @Metadata({ data: "json, name=waitRatioAvg" })
  waitRatioAvg?: number;

  @Metadata({ data: "json, name=waitRatioMax" })
  waitRatioMax?: number;

  @Metadata({ data: "json, name=writeMsAvg" })
  writeMsAvg?: string;

  @Metadata({ data: "json, name=writeMsMax" })
  writeMsMax?: string;

  @Metadata({ data: "json, name=writeRatioAvg" })
  writeRatioAvg?: number;

  @Metadata({ data: "json, name=writeRatioMax" })
  writeRatioMax?: number;
}
