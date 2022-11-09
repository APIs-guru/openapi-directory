import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListEnvironmentsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Environments" })
  environments: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
