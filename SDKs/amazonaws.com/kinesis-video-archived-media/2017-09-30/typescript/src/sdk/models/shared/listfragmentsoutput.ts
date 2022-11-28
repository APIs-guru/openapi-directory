import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Fragment } from "./fragment";



export class ListFragmentsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Fragments", elemType: Fragment })
  fragments?: Fragment[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
