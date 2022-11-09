import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCoreDtoTagsTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=datapoints, form, name=datapoints;" })
  datapoints?: number[];

  @Metadata({ data: "json, name=groups, form, name=groups;" })
  groups?: number[];

  @Metadata({ data: "json, name=id, form, name=id;" })
  id?: number;

  @Metadata({ data: "json, name=name, form, name=name;" })
  name?: string;
}
