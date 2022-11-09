import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMlModelInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MLModelId" })
  mlModelId: string;

  @Metadata({ data: "json, name=Verbose" })
  verbose?: boolean;
}
