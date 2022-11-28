import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListEnvironmentsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Environments" })
  environments: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
