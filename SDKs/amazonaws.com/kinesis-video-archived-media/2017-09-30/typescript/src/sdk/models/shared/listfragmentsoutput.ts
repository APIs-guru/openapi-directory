import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Fragment } from "./fragment";


export class ListFragmentsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Fragments", elemType: shared.Fragment })
  fragments?: Fragment[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
