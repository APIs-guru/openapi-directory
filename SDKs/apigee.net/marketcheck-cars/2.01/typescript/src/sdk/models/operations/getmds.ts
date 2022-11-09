import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMdsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=base_exterior_color" })
  baseExteriorColor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=base_interior_color" })
  baseInteriorColor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=body_subtype" })
  bodySubtype?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=body_type" })
  bodyType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=car_type" })
  carType?: shared.CarCarTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=carfax_1_owner" })
  carfax1Owner?: shared.Carfax1OwnerEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=carfax_clean_title" })
  carfaxCleanTitle?: shared.CarfaxCleanTitleEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=city" })
  city?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=city_mpg_range" })
  cityMpgRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: shared.CountryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cylinders" })
  cylinders?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dealer_id" })
  dealerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dealer_type" })
  dealerType?: shared.DealerTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dealership_group_name" })
  dealershipGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=debug" })
  debug?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dom_180_range" })
  dom180Range?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dom_active_range" })
  domActiveRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dom_range" })
  domRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=doors" })
  doors?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=drivetrain" })
  drivetrain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=engine" })
  engine?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=engine_aspiration" })
  engineAspiration?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=engine_block" })
  engineBlock?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=engine_size" })
  engineSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exact" })
  exact?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exterior_color" })
  exteriorColor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=finance_down_payment" })
  financeDownPayment?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=finance_down_payment_per" })
  financeDownPaymentPer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=finance_emp" })
  financeEmp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=finance_loan_apr" })
  financeLoanApr?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=finance_loan_term" })
  financeLoanTerm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fuel_type" })
  fuelType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=highway_mpg_range" })
  highwayMpgRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_sold" })
  includeSold?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interior_color" })
  interiorColor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=latitude" })
  latitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lease_down_payment" })
  leaseDownPayment?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lease_emp" })
  leaseEmp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lease_term" })
  leaseTerm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=longitude" })
  longitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=miles_range" })
  milesRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=msa_code" })
  msaCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=msrp_range" })
  msrpRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=price_range" })
  priceRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transmission" })
  transmission?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=trim" })
  trim?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicle_type" })
  vehicleType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ymmt" })
  ymmt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class GetMdsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMdsQueryParams;
}


export class GetMdsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  mds?: shared.Mds;

  @Metadata()
  statusCode: number;
}
