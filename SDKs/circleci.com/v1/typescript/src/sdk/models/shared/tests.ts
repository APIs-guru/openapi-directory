import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";



export class TestsTests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classname" })
  classname?: string;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=run_time" })
  runTime?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}


export class Tests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tests", elemType: TestsTests })
  tests?: TestsTests[];
}
