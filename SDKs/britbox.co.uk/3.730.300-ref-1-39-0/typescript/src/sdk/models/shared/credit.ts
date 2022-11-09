import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreditRoleEnum {
    Actor = "actor"
,    Associateproducer = "associateproducer"
,    Coactor = "coactor"
,    Director = "director"
,    Executiveproducer = "executiveproducer"
,    Filminglocation = "filminglocation"
,    Guest = "guest"
,    Narrator = "narrator"
,    Other = "other"
,    Presenter = "presenter"
,    Producer = "producer"
,    Productmanager = "productmanager"
,    Thememusicby = "thememusicby"
,    Voice = "voice"
,    Writer = "writer"
}


export class Credit extends SpeakeasyBase {
  @Metadata({ data: "json, name=character" })
  character?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=role" })
  role: CreditRoleEnum;
}
