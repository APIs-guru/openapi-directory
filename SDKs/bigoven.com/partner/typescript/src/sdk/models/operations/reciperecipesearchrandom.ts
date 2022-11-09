import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecipeRecipeSearchRandomQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=any_kw" })
  anyKw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=boostmine" })
  boostmine?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=champion" })
  champion?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=chs" })
  chs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=coll" })
  coll?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cps" })
  cps?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cuisine" })
  cuisine?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=db" })
  db?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dyf" })
  dyf?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_cat" })
  excludeCat?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_ing" })
  excludeIng?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_primarycat" })
  excludePrimarycat?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=folder" })
  folder?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=glf" })
  glf?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_cat" })
  includeCat?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_ing" })
  includeIng?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_primarycat" })
  includePrimarycat?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxIngredients" })
  maxIngredients?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minIngredients" })
  minIngredients?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ntf" })
  ntf?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=photos" })
  photos?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rmf" })
  rmf?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=servingsMin" })
  servingsMin?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sff" })
  sff?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slf" })
  slf?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=synonyms" })
  synonyms?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=title_kw" })
  titleKw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tnf" })
  tnf?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=totalMins" })
  totalMins?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userset" })
  userset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vgn" })
  vgn?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vtn" })
  vtn?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=wmf" })
  wmf?: number;
}


export class RecipeRecipeSearchRandomRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RecipeRecipeSearchRandomQueryParams;
}


export class RecipeRecipeSearchRandomResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApi2RecipeSearchResult?: shared.BigOvenModelApi2RecipeSearchResult;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
