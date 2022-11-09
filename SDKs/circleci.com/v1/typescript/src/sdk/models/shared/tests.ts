import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StatusEnum } from "./statusenum";


export class TestsTests extends SpeakeasyBase {
  @Metadata({ data: "json, name=classname" })
  classname?: string;

  @Metadata({ data: "json, name=file" })
  file?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=result" })
  result?: StatusEnum;

  @Metadata({ data: "json, name=run_time" })
  runTime?: number;

  @Metadata({ data: "json, name=source" })
  source?: string;
}


export class Tests extends SpeakeasyBase {
  @Metadata({ data: "json, name=tests", elemType: shared.TestsTests })
  tests?: TestsTests[];
}
