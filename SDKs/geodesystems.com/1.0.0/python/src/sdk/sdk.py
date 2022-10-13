import warnings
import requests
from typing import Any
from sdk.models import operations
from . import utils


SERVERS = [
	"https://geodesystems.com:443/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def media_tabular_extractsheet(self, request: operations.MediaTabularExtractsheetRequest) -> operations.MediaTabularExtractsheetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/entry/show"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MediaTabularExtractsheetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_2017_boulder_election_expenditures(self, request: operations.Search2017BoulderElectionExpendituresRequest) -> operations.Search2017BoulderElectionExpendituresResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/2017_boulder_election_expenditures"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Search2017BoulderElectionExpendituresResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_any(self, request: operations.SearchAnyRequest) -> operations.SearchAnyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/any"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchAnyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_beforeafter(self, request: operations.SearchBeforeafterRequest) -> operations.SearchBeforeafterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/beforeafter"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBeforeafterResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_biblio(self, request: operations.SearchBiblioRequest) -> operations.SearchBiblioResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/biblio"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBiblioResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_dicom(self, request: operations.SearchBioDicomRequest) -> operations.SearchBioDicomResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_dicom"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioDicomResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_dicom_test(self, request: operations.SearchBioDicomTestRequest) -> operations.SearchBioDicomTestResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_dicom_test"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioDicomTestResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_fasta(self, request: operations.SearchBioFastaRequest) -> operations.SearchBioFastaResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_fasta"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioFastaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_fastq(self, request: operations.SearchBioFastqRequest) -> operations.SearchBioFastqResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_fastq"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioFastqResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_hmmer_index(self, request: operations.SearchBioHmmerIndexRequest) -> operations.SearchBioHmmerIndexResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_hmmer_index"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioHmmerIndexResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_ome_tiff(self, request: operations.SearchBioOmeTiffRequest) -> operations.SearchBioOmeTiffResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_ome_tiff"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioOmeTiffResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_ontology_assay(self, request: operations.SearchBioOntologyAssayRequest) -> operations.SearchBioOntologyAssayResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_ontology_assay"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioOntologyAssayResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_ontology_cohort(self, request: operations.SearchBioOntologyCohortRequest) -> operations.SearchBioOntologyCohortResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_ontology_cohort"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioOntologyCohortResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_ontology_person(self, request: operations.SearchBioOntologyPersonRequest) -> operations.SearchBioOntologyPersonResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_ontology_person"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioOntologyPersonResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_ontology_sample(self, request: operations.SearchBioOntologySampleRequest) -> operations.SearchBioOntologySampleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_ontology_sample"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioOntologySampleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_ontology_series(self, request: operations.SearchBioOntologySeriesRequest) -> operations.SearchBioOntologySeriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_ontology_series"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioOntologySeriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_ontology_study(self, request: operations.SearchBioOntologyStudyRequest) -> operations.SearchBioOntologyStudyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_ontology_study"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioOntologyStudyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_sam(self, request: operations.SearchBioSamRequest) -> operations.SearchBioSamResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_sam"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioSamResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_sf_pdb(self, request: operations.SearchBioSfPdbRequest) -> operations.SearchBioSfPdbResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_sf_pdb"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioSfPdbResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_sra(self, request: operations.SearchBioSraRequest) -> operations.SearchBioSraResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_sra"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioSraResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_stockholm(self, request: operations.SearchBioStockholmRequest) -> operations.SearchBioStockholmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_stockholm"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioStockholmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bio_taxonomy(self, request: operations.SearchBioTaxonomyRequest) -> operations.SearchBioTaxonomyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bio_taxonomy"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBioTaxonomyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_blogentry(self, request: operations.SearchBlogentryRequest) -> operations.SearchBlogentryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/blogentry"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBlogentryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bolder_rental_housing(self, request: operations.SearchBolderRentalHousingRequest) -> operations.SearchBolderRentalHousingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bolder_rental_housing"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBolderRentalHousingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_bookmarks(self, request: operations.SearchBookmarksRequest) -> operations.SearchBookmarksResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/bookmarks"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBookmarksResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_boston_crime(self, request: operations.SearchBostonCrimeRequest) -> operations.SearchBostonCrimeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/boston_crime"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBostonCrimeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_boulder_2017_election_contributions(self, request: operations.SearchBoulder2017ElectionContributionsRequest) -> operations.SearchBoulder2017ElectionContributionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/boulder_2017_election_contributions"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBoulder2017ElectionContributionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_boulder_campaign_contributions(self, request: operations.SearchBoulderCampaignContributionsRequest) -> operations.SearchBoulderCampaignContributionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/boulder_campaign_contributions"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBoulderCampaignContributionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_boulder_consulting_services(self, request: operations.SearchBoulderConsultingServicesRequest) -> operations.SearchBoulderConsultingServicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/boulder_consulting_services"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBoulderConsultingServicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_boulder_county_voter_details(self, request: operations.SearchBoulderCountyVoterDetailsRequest) -> operations.SearchBoulderCountyVoterDetailsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/boulder_county_voter_details"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBoulderCountyVoterDetailsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_boulder_crimes(self, request: operations.SearchBoulderCrimesRequest) -> operations.SearchBoulderCrimesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/boulder_crimes"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBoulderCrimesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_boulder_emails(self, request: operations.SearchBoulderEmailsRequest) -> operations.SearchBoulderEmailsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/boulder_emails"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBoulderEmailsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_boulder_employee_salaries(self, request: operations.SearchBoulderEmployeeSalariesRequest) -> operations.SearchBoulderEmployeeSalariesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/boulder_employee_salaries"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchBoulderEmployeeSalariesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_calendar(self, request: operations.SearchCalendarRequest) -> operations.SearchCalendarResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/calendar"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCalendarResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_campaign_donors(self, request: operations.SearchCampaignDonorsRequest) -> operations.SearchCampaignDonorsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/campaign_donors"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCampaignDonorsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_campaign_expenditures(self, request: operations.SearchCampaignExpendituresRequest) -> operations.SearchCampaignExpendituresResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/campaign_expenditures"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCampaignExpendituresResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_cataloglink(self, request: operations.SearchCataloglinkRequest) -> operations.SearchCataloglinkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/cataloglink"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCataloglinkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_cdm_grid(self, request: operations.SearchCdmGridRequest) -> operations.SearchCdmGridResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/cdm_grid"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCdmGridResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_chatroom(self, request: operations.SearchChatroomRequest) -> operations.SearchChatroomResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/chatroom"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchChatroomResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_colorado_water_rights(self, request: operations.SearchColoradoWaterRightsRequest) -> operations.SearchColoradoWaterRightsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/colorado_water_rights"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchColoradoWaterRightsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_committee_donations(self, request: operations.SearchCommitteeDonationsRequest) -> operations.SearchCommitteeDonationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/committee_donations"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCommitteeDonationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_community_datahub(self, request: operations.SearchCommunityDatahubRequest) -> operations.SearchCommunityDatahubResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/community_datahub"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCommunityDatahubResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_community_resource(self, request: operations.SearchCommunityResourceRequest) -> operations.SearchCommunityResourceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/community_resource"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchCommunityResourceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_construction_permits(self, request: operations.SearchConstructionPermitsRequest) -> operations.SearchConstructionPermitsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/construction_permits"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchConstructionPermitsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_contact(self, request: operations.SearchContactRequest) -> operations.SearchContactResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/contact"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchContactResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_db_co_indicators(self, request: operations.SearchDbCoIndicatorsRequest) -> operations.SearchDbCoIndicatorsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/db_co_indicators"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchDbCoIndicatorsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_earth_satellite_landsat(self, request: operations.SearchEarthSatelliteLandsatRequest) -> operations.SearchEarthSatelliteLandsatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/earth_satellite_landsat"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchEarthSatelliteLandsatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_faq(self, request: operations.SearchFaqRequest) -> operations.SearchFaqResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/faq"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchFaqResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_fec_pacs(self, request: operations.SearchFecPacsRequest) -> operations.SearchFecPacsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/fec_pacs"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchFecPacsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_feccandidates(self, request: operations.SearchFeccandidatesRequest) -> operations.SearchFeccandidatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/feccandidates"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchFeccandidatesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_feed(self, request: operations.SearchFeedRequest) -> operations.SearchFeedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/feed"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchFeedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_file(self, request: operations.SearchFileRequest) -> operations.SearchFileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/file"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchFileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_fits_data(self, request: operations.SearchFitsDataRequest) -> operations.SearchFitsDataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/fits_data"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchFitsDataResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_ftp(self, request: operations.SearchFtpRequest) -> operations.SearchFtpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/ftp"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchFtpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_gadgets_countdown(self, request: operations.SearchGadgetsCountdownRequest) -> operations.SearchGadgetsCountdownResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/gadgets_countdown"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGadgetsCountdownResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_gadgets_stock(self, request: operations.SearchGadgetsStockRequest) -> operations.SearchGadgetsStockResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/gadgets_stock"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGadgetsStockResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_gadgets_weather(self, request: operations.SearchGadgetsWeatherRequest) -> operations.SearchGadgetsWeatherResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/gadgets_weather"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGadgetsWeatherResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_gazeteer_census_tracts(self, request: operations.SearchGazeteerCensusTractsRequest) -> operations.SearchGazeteerCensusTractsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/gazeteer_census_tracts"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGazeteerCensusTractsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_gazeteer_counties(self, request: operations.SearchGazeteerCountiesRequest) -> operations.SearchGazeteerCountiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/gazeteer_counties"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGazeteerCountiesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_geo_geojson(self, request: operations.SearchGeoGeojsonRequest) -> operations.SearchGeoGeojsonResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/geo_geojson"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGeoGeojsonResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_geo_geotiff(self, request: operations.SearchGeoGeotiffRequest) -> operations.SearchGeoGeotiffResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/geo_geotiff"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGeoGeotiffResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_geo_gpx(self, request: operations.SearchGeoGpxRequest) -> operations.SearchGeoGpxResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/geo_gpx"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGeoGpxResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_geo_hdf5(self, request: operations.SearchGeoHdf5Request) -> operations.SearchGeoHdf5Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/geo_hdf5"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGeoHdf5Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_geo_kml(self, request: operations.SearchGeoKmlRequest) -> operations.SearchGeoKmlResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/geo_kml"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGeoKmlResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_geo_shapefile(self, request: operations.SearchGeoShapefileRequest) -> operations.SearchGeoShapefileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/geo_shapefile"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGeoShapefileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_geo_shapefile_fips(self, request: operations.SearchGeoShapefileFipsRequest) -> operations.SearchGeoShapefileFipsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/geo_shapefile_fips"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGeoShapefileFipsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_glossary(self, request: operations.SearchGlossaryRequest) -> operations.SearchGlossaryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/glossary"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGlossaryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_gridaggregation(self, request: operations.SearchGridaggregationRequest) -> operations.SearchGridaggregationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/gridaggregation"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGridaggregationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_group(self, request: operations.SearchGroupRequest) -> operations.SearchGroupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/group"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchGroupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_hipchat_group(self, request: operations.SearchHipchatGroupRequest) -> operations.SearchHipchatGroupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/hipchat_group"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchHipchatGroupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_homepage(self, request: operations.SearchHomepageRequest) -> operations.SearchHomepageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/homepage"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchHomepageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_incident(self, request: operations.SearchIncidentRequest) -> operations.SearchIncidentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/incident"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchIncidentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_jeopardy(self, request: operations.SearchJeopardyRequest) -> operations.SearchJeopardyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/jeopardy"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchJeopardyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_latlonimage(self, request: operations.SearchLatlonimageRequest) -> operations.SearchLatlonimageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/latlonimage"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchLatlonimageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_lidar_collection(self, request: operations.SearchLidarCollectionRequest) -> operations.SearchLidarCollectionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/lidar_collection"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchLidarCollectionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_lidar_las(self, request: operations.SearchLidarLasRequest) -> operations.SearchLidarLasResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/lidar_las"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchLidarLasResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_lidar_lvis(self, request: operations.SearchLidarLvisRequest) -> operations.SearchLidarLvisResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/lidar_lvis"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchLidarLvisResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_link(self, request: operations.SearchLinkRequest) -> operations.SearchLinkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/link"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchLinkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_localfiles(self, request: operations.SearchLocalfilesRequest) -> operations.SearchLocalfilesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/localfiles"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchLocalfilesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_locations(self, request: operations.SearchLocationsRequest) -> operations.SearchLocationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/locations"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchLocationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_map_googlemap(self, request: operations.SearchMapGooglemapRequest) -> operations.SearchMapGooglemapResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/map_googlemap"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchMapGooglemapResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_media_audiofile(self, request: operations.SearchMediaAudiofileRequest) -> operations.SearchMediaAudiofileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/media_audiofile"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchMediaAudiofileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_media_imageloop(self, request: operations.SearchMediaImageloopRequest) -> operations.SearchMediaImageloopResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/media_imageloop"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchMediaImageloopResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_media_photoalbum(self, request: operations.SearchMediaPhotoalbumRequest) -> operations.SearchMediaPhotoalbumResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/media_photoalbum"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchMediaPhotoalbumResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_media_video_channel(self, request: operations.SearchMediaVideoChannelRequest) -> operations.SearchMediaVideoChannelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/media_video_channel"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchMediaVideoChannelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_media_video_quicktime(self, request: operations.SearchMediaVideoQuicktimeRequest) -> operations.SearchMediaVideoQuicktimeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/media_video_quicktime"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchMediaVideoQuicktimeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_media_youtubevideo(self, request: operations.SearchMediaYoutubevideoRequest) -> operations.SearchMediaYoutubevideoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/media_youtubevideo"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchMediaYoutubevideoResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_notes(self, request: operations.SearchNotesRequest) -> operations.SearchNotesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/notes"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchNotesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_notes_jsonfile(self, request: operations.SearchNotesJsonfileRequest) -> operations.SearchNotesJsonfileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/notes_jsonfile"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchNotesJsonfileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_notes_note(self, request: operations.SearchNotesNoteRequest) -> operations.SearchNotesNoteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/notes_note"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchNotesNoteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_notes_notebook(self, request: operations.SearchNotesNotebookRequest) -> operations.SearchNotesNotebookResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/notes_notebook"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchNotesNotebookResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_nwsfeed(self, request: operations.SearchNwsfeedRequest) -> operations.SearchNwsfeedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/nwsfeed"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchNwsfeedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_opendaplink(self, request: operations.SearchOpendaplinkRequest) -> operations.SearchOpendaplinkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/opendaplink"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchOpendaplinkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_owl_class(self, request: operations.SearchOwlClassRequest) -> operations.SearchOwlClassResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/owl.class"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchOwlClassResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_owl_ontology(self, request: operations.SearchOwlOntologyRequest) -> operations.SearchOwlOntologyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/owl.ontology"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchOwlOntologyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_pasteitentry(self, request: operations.SearchPasteitentryRequest) -> operations.SearchPasteitentryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/pasteitentry"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchPasteitentryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_point_text(self, request: operations.SearchPointTextRequest) -> operations.SearchPointTextResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/point_text"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchPointTextResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_police_stop_data(self, request: operations.SearchPoliceStopDataRequest) -> operations.SearchPoliceStopDataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/police_stop_data"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchPoliceStopDataResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_poll(self, request: operations.SearchPollRequest) -> operations.SearchPollResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/poll"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchPollResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_campaign(self, request: operations.SearchProjectCampaignRequest) -> operations.SearchProjectCampaignResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_campaign"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectCampaignResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_casestudy(self, request: operations.SearchProjectCasestudyRequest) -> operations.SearchProjectCasestudyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_casestudy"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectCasestudyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_contribution(self, request: operations.SearchProjectContributionRequest) -> operations.SearchProjectContributionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_contribution"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectContributionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_dataformat(self, request: operations.SearchProjectDataformatRequest) -> operations.SearchProjectDataformatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_dataformat"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectDataformatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_dataset(self, request: operations.SearchProjectDatasetRequest) -> operations.SearchProjectDatasetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_dataset"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectDatasetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_deployment(self, request: operations.SearchProjectDeploymentRequest) -> operations.SearchProjectDeploymentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_deployment"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectDeploymentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_experiment(self, request: operations.SearchProjectExperimentRequest) -> operations.SearchProjectExperimentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_experiment"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectExperimentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_fieldnote(self, request: operations.SearchProjectFieldnoteRequest) -> operations.SearchProjectFieldnoteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_fieldnote"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectFieldnoteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_gps_controlpoints(self, request: operations.SearchProjectGpsControlpointsRequest) -> operations.SearchProjectGpsControlpointsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_gps_controlpoints"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectGpsControlpointsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_gps_raw(self, request: operations.SearchProjectGpsRawRequest) -> operations.SearchProjectGpsRawResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_gps_raw"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectGpsRawResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_gps_rinex(self, request: operations.SearchProjectGpsRinexRequest) -> operations.SearchProjectGpsRinexResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_gps_rinex"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectGpsRinexResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_instrument(self, request: operations.SearchProjectInstrumentRequest) -> operations.SearchProjectInstrumentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_instrument"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectInstrumentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_learning_resource(self, request: operations.SearchProjectLearningResourceRequest) -> operations.SearchProjectLearningResourceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_learning_resource"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectLearningResourceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_meeting(self, request: operations.SearchProjectMeetingRequest) -> operations.SearchProjectMeetingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_meeting"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectMeetingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_organization(self, request: operations.SearchProjectOrganizationRequest) -> operations.SearchProjectOrganizationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_organization"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectOrganizationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_program(self, request: operations.SearchProjectProgramRequest) -> operations.SearchProjectProgramResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_program"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectProgramResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_project(self, request: operations.SearchProjectProjectRequest) -> operations.SearchProjectProjectResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_project"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectProjectResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_service(self, request: operations.SearchProjectServiceRequest) -> operations.SearchProjectServiceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_service"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectServiceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_site(self, request: operations.SearchProjectSiteRequest) -> operations.SearchProjectSiteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_site"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectSiteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_softwarepackage(self, request: operations.SearchProjectSoftwarepackageRequest) -> operations.SearchProjectSoftwarepackageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_softwarepackage"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectSoftwarepackageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_standard_name(self, request: operations.SearchProjectStandardNameRequest) -> operations.SearchProjectStandardNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_standard_name"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectStandardNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_surveylocation(self, request: operations.SearchProjectSurveylocationRequest) -> operations.SearchProjectSurveylocationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_surveylocation"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectSurveylocationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_term(self, request: operations.SearchProjectTermRequest) -> operations.SearchProjectTermResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_term"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectTermResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_visit(self, request: operations.SearchProjectVisitRequest) -> operations.SearchProjectVisitResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_visit"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectVisitResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_project_vocabulary(self, request: operations.SearchProjectVocabularyRequest) -> operations.SearchProjectVocabularyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/project_vocabulary"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchProjectVocabularyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_property_sales(self, request: operations.SearchPropertySalesRequest) -> operations.SearchPropertySalesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/property_sales"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchPropertySalesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_propertydb(self, request: operations.SearchPropertydbRequest) -> operations.SearchPropertydbResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/propertydb"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchPropertydbResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_python_notebook(self, request: operations.SearchPythonNotebookRequest) -> operations.SearchPythonNotebookResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/python_notebook"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchPythonNotebookResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_slack_team(self, request: operations.SearchSlackTeamRequest) -> operations.SearchSlackTeamResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/slack_team"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchSlackTeamResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_statusboard(self, request: operations.SearchStatusboardRequest) -> operations.SearchStatusboardResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/statusboard"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchStatusboardResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_sunrisesunset(self, request: operations.SearchSunrisesunsetRequest) -> operations.SearchSunrisesunsetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/sunrisesunset"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchSunrisesunsetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_tasks(self, request: operations.SearchTasksRequest) -> operations.SearchTasksResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/tasks"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTasksResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_tmdbmovies(self, request: operations.SearchTmdbmoviesRequest) -> operations.SearchTmdbmoviesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/tmdbmovies"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTmdbmoviesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_todo(self, request: operations.SearchTodoRequest) -> operations.SearchTodoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/todo"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTodoResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_trip_event(self, request: operations.SearchTripEventRequest) -> operations.SearchTripEventResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/trip_event"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTripEventResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_trip_flight(self, request: operations.SearchTripFlightRequest) -> operations.SearchTripFlightResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/trip_flight"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTripFlightResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_trip_hotel(self, request: operations.SearchTripHotelRequest) -> operations.SearchTripHotelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/trip_hotel"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTripHotelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_trip_report(self, request: operations.SearchTripReportRequest) -> operations.SearchTripReportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/trip_report"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTripReportResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_trip_trip(self, request: operations.SearchTripTripRequest) -> operations.SearchTripTripResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/trip_trip"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTripTripResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_awc_metar(self, request: operations.SearchTypeAwcMetarRequest) -> operations.SearchTypeAwcMetarResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_awc_metar"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeAwcMetarResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_biz_stockseries(self, request: operations.SearchTypeBizStockseriesRequest) -> operations.SearchTypeBizStockseriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_biz_stockseries"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeBizStockseriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_bls_series(self, request: operations.SearchTypeBlsSeriesRequest) -> operations.SearchTypeBlsSeriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_bls_series"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeBlsSeriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_bls_survey(self, request: operations.SearchTypeBlsSurveyRequest) -> operations.SearchTypeBlsSurveyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_bls_survey"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeBlsSurveyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_census_acs(self, request: operations.SearchTypeCensusAcsRequest) -> operations.SearchTypeCensusAcsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_census_acs"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeCensusAcsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_daymet(self, request: operations.SearchTypeDaymetRequest) -> operations.SearchTypeDaymetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_daymet"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeDaymetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_db_table(self, request: operations.SearchTypeDbTableRequest) -> operations.SearchTypeDbTableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_db_table"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeDbTableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_document_csv(self, request: operations.SearchTypeDocumentCsvRequest) -> operations.SearchTypeDocumentCsvResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_document_csv"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeDocumentCsvResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_document_doc(self, request: operations.SearchTypeDocumentDocRequest) -> operations.SearchTypeDocumentDocResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_document_doc"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeDocumentDocResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_document_html(self, request: operations.SearchTypeDocumentHTMLRequest) -> operations.SearchTypeDocumentHTMLResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_document_html"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeDocumentHTMLResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_document_pdf(self, request: operations.SearchTypeDocumentPdfRequest) -> operations.SearchTypeDocumentPdfResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_document_pdf"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeDocumentPdfResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_document_ppt(self, request: operations.SearchTypeDocumentPptRequest) -> operations.SearchTypeDocumentPptResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_document_ppt"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeDocumentPptResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_document_xls(self, request: operations.SearchTypeDocumentXlsRequest) -> operations.SearchTypeDocumentXlsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_document_xls"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeDocumentXlsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_drilsdown_casestudy(self, request: operations.SearchTypeDrilsdownCasestudyRequest) -> operations.SearchTypeDrilsdownCasestudyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_drilsdown_casestudy"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeDrilsdownCasestudyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_edgar_filing(self, request: operations.SearchTypeEdgarFilingRequest) -> operations.SearchTypeEdgarFilingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_edgar_filing"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeEdgarFilingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_eia_category(self, request: operations.SearchTypeEiaCategoryRequest) -> operations.SearchTypeEiaCategoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_eia_category"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeEiaCategoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_eia_series(self, request: operations.SearchTypeEiaSeriesRequest) -> operations.SearchTypeEiaSeriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_eia_series"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeEiaSeriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_esri_featureserver(self, request: operations.SearchTypeEsriFeatureserverRequest) -> operations.SearchTypeEsriFeatureserverResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_esri_featureserver"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeEsriFeatureserverResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_esri_geometryserver(self, request: operations.SearchTypeEsriGeometryserverRequest) -> operations.SearchTypeEsriGeometryserverResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_esri_geometryserver"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeEsriGeometryserverResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_esri_gpserver(self, request: operations.SearchTypeEsriGpserverRequest) -> operations.SearchTypeEsriGpserverResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_esri_gpserver"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeEsriGpserverResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_esri_imageserver(self, request: operations.SearchTypeEsriImageserverRequest) -> operations.SearchTypeEsriImageserverResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_esri_imageserver"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeEsriImageserverResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_esri_layer(self, request: operations.SearchTypeEsriLayerRequest) -> operations.SearchTypeEsriLayerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_esri_layer"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeEsriLayerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_esri_mapserver(self, request: operations.SearchTypeEsriMapserverRequest) -> operations.SearchTypeEsriMapserverResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_esri_mapserver"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeEsriMapserverResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_esri_restfolder(self, request: operations.SearchTypeEsriRestfolderRequest) -> operations.SearchTypeEsriRestfolderResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_esri_restfolder"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeEsriRestfolderResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_esri_restserver(self, request: operations.SearchTypeEsriRestserverRequest) -> operations.SearchTypeEsriRestserverResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_esri_restserver"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeEsriRestserverResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_esri_restservice(self, request: operations.SearchTypeEsriRestserviceRequest) -> operations.SearchTypeEsriRestserviceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_esri_restservice"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeEsriRestserviceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_extremes(self, request: operations.SearchTypeExtremesRequest) -> operations.SearchTypeExtremesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_extremes"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeExtremesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_fred_category(self, request: operations.SearchTypeFredCategoryRequest) -> operations.SearchTypeFredCategoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_fred_category"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeFredCategoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_fred_series(self, request: operations.SearchTypeFredSeriesRequest) -> operations.SearchTypeFredSeriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_fred_series"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeFredSeriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_gtfs_agency(self, request: operations.SearchTypeGtfsAgencyRequest) -> operations.SearchTypeGtfsAgencyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_gtfs_agency"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeGtfsAgencyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_gtfs_route(self, request: operations.SearchTypeGtfsRouteRequest) -> operations.SearchTypeGtfsRouteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_gtfs_route"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeGtfsRouteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_gtfs_routes(self, request: operations.SearchTypeGtfsRoutesRequest) -> operations.SearchTypeGtfsRoutesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_gtfs_routes"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeGtfsRoutesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_gtfs_stop(self, request: operations.SearchTypeGtfsStopRequest) -> operations.SearchTypeGtfsStopResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_gtfs_stop"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeGtfsStopResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_gtfs_stops(self, request: operations.SearchTypeGtfsStopsRequest) -> operations.SearchTypeGtfsStopsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_gtfs_stops"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeGtfsStopsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_gtfs_trip(self, request: operations.SearchTypeGtfsTripRequest) -> operations.SearchTypeGtfsTripResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_gtfs_trip"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeGtfsTripResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_hazarddata(self, request: operations.SearchTypeHazarddataRequest) -> operations.SearchTypeHazarddataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_hazarddata"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeHazarddataResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_hydro_colorado(self, request: operations.SearchTypeHydroColoradoRequest) -> operations.SearchTypeHydroColoradoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_hydro_colorado"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeHydroColoradoResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_idv_bundle(self, request: operations.SearchTypeIdvBundleRequest) -> operations.SearchTypeIdvBundleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_idv_bundle"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeIdvBundleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_image(self, request: operations.SearchTypeImageRequest) -> operations.SearchTypeImageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_image"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeImageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_image_airport(self, request: operations.SearchTypeImageAirportRequest) -> operations.SearchTypeImageAirportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_image_airport"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeImageAirportResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_image_webcam(self, request: operations.SearchTypeImageWebcamRequest) -> operations.SearchTypeImageWebcamResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_image_webcam"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeImageWebcamResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_mb(self, request: operations.SearchTypeMbRequest) -> operations.SearchTypeMbResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_mb"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeMbResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_mb_collection(self, request: operations.SearchTypeMbCollectionRequest) -> operations.SearchTypeMbCollectionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_mb_collection"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeMbCollectionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_mb_point_basic(self, request: operations.SearchTypeMbPointBasicRequest) -> operations.SearchTypeMbPointBasicResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_mb_point_basic"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeMbPointBasicResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_metameta_dictionary(self, request: operations.SearchTypeMetametaDictionaryRequest) -> operations.SearchTypeMetametaDictionaryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_metameta_dictionary"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeMetametaDictionaryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_metameta_field(self, request: operations.SearchTypeMetametaFieldRequest) -> operations.SearchTypeMetametaFieldResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_metameta_field"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeMetametaFieldResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_nasaames(self, request: operations.SearchTypeNasaamesRequest) -> operations.SearchTypeNasaamesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_nasaames"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeNasaamesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_ncss(self, request: operations.SearchTypeNcssRequest) -> operations.SearchTypeNcssResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_ncss"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeNcssResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_nitf(self, request: operations.SearchTypeNitfRequest) -> operations.SearchTypeNitfResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_nitf"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeNitfResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_ameriflux_level2(self, request: operations.SearchTypePointAmerifluxLevel2Request) -> operations.SearchTypePointAmerifluxLevel2Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_ameriflux_level2"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointAmerifluxLevel2Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_amrc_final(self, request: operations.SearchTypePointAmrcFinalRequest) -> operations.SearchTypePointAmrcFinalResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_amrc_final"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointAmrcFinalResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_amrc_freewave(self, request: operations.SearchTypePointAmrcFreewaveRequest) -> operations.SearchTypePointAmrcFreewaveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_amrc_freewave"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointAmrcFreewaveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_czo(self, request: operations.SearchTypePointCzoRequest) -> operations.SearchTypePointCzoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_czo"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointCzoResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_gcnet(self, request: operations.SearchTypePointGcnetRequest) -> operations.SearchTypePointGcnetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_gcnet"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointGcnetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_geomag_iaga2002(self, request: operations.SearchTypePointGeomagIaga2002Request) -> operations.SearchTypePointGeomagIaga2002Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_geomag_iaga2002"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointGeomagIaga2002Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_hydro_waterml(self, request: operations.SearchTypePointHydroWatermlRequest) -> operations.SearchTypePointHydroWatermlResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_hydro_waterml"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointHydroWatermlResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_icebridge_atm_icessn(self, request: operations.SearchTypePointIcebridgeAtmIcessnRequest) -> operations.SearchTypePointIcebridgeAtmIcessnResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_icebridge_atm_icessn"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointIcebridgeAtmIcessnResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_icebridge_atm_qfit(self, request: operations.SearchTypePointIcebridgeAtmQfitRequest) -> operations.SearchTypePointIcebridgeAtmQfitResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_icebridge_atm_qfit"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointIcebridgeAtmQfitResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_icebridge_mccords_irmcr2(self, request: operations.SearchTypePointIcebridgeMccordsIrmcr2Request) -> operations.SearchTypePointIcebridgeMccordsIrmcr2Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_icebridge_mccords_irmcr2"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointIcebridgeMccordsIrmcr2Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_icebridge_mccords_irmcr3(self, request: operations.SearchTypePointIcebridgeMccordsIrmcr3Request) -> operations.SearchTypePointIcebridgeMccordsIrmcr3Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_icebridge_mccords_irmcr3"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointIcebridgeMccordsIrmcr3Response(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_icebridge_paris(self, request: operations.SearchTypePointIcebridgeParisRequest) -> operations.SearchTypePointIcebridgeParisResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_icebridge_paris"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointIcebridgeParisResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_idv(self, request: operations.SearchTypePointIdvRequest) -> operations.SearchTypePointIdvResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_idv"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointIdvResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_inline(self, request: operations.SearchTypePointInlineRequest) -> operations.SearchTypePointInlineResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_inline"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointInlineResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_ncdc_climate(self, request: operations.SearchTypePointNcdcClimateRequest) -> operations.SearchTypePointNcdcClimateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_ncdc_climate"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointNcdcClimateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_netcdf(self, request: operations.SearchTypePointNetcdfRequest) -> operations.SearchTypePointNetcdfResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_netcdf"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointNetcdfResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_noaa_carbon(self, request: operations.SearchTypePointNoaaCarbonRequest) -> operations.SearchTypePointNoaaCarbonResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_noaa_carbon"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointNoaaCarbonResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_noaa_flask_event(self, request: operations.SearchTypePointNoaaFlaskEventRequest) -> operations.SearchTypePointNoaaFlaskEventResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_noaa_flask_event"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointNoaaFlaskEventResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_noaa_flask_month(self, request: operations.SearchTypePointNoaaFlaskMonthRequest) -> operations.SearchTypePointNoaaFlaskMonthResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_noaa_flask_month"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointNoaaFlaskMonthResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_noaa_madis(self, request: operations.SearchTypePointNoaaMadisRequest) -> operations.SearchTypePointNoaaMadisResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_noaa_madis"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointNoaaMadisResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_noaa_tower(self, request: operations.SearchTypePointNoaaTowerRequest) -> operations.SearchTypePointNoaaTowerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_noaa_tower"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointNoaaTowerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_ocean_cnv(self, request: operations.SearchTypePointOceanCnvRequest) -> operations.SearchTypePointOceanCnvResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_ocean_cnv"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointOceanCnvResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_ocean_csv_sado_tts(self, request: operations.SearchTypePointOceanCsvSadoTtsRequest) -> operations.SearchTypePointOceanCsvSadoTtsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_ocean_csv_sado_TTS"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointOceanCsvSadoTtsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_ocean_csv_sado_meteo(self, request: operations.SearchTypePointOceanCsvSadoMeteoRequest) -> operations.SearchTypePointOceanCsvSadoMeteoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_ocean_csv_sado_meteo"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointOceanCsvSadoMeteoResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_ocean_csv_sado_position(self, request: operations.SearchTypePointOceanCsvSadoPositionRequest) -> operations.SearchTypePointOceanCsvSadoPositionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_ocean_csv_sado_position"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointOceanCsvSadoPositionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_ocean_netcdf_glider(self, request: operations.SearchTypePointOceanNetcdfGliderRequest) -> operations.SearchTypePointOceanNetcdfGliderResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_ocean_netcdf_glider"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointOceanNetcdfGliderResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_ocean_netcdf_track(self, request: operations.SearchTypePointOceanNetcdfTrackRequest) -> operations.SearchTypePointOceanNetcdfTrackResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_ocean_netcdf_track"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointOceanNetcdfTrackResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_ocean_ooi_dmgx(self, request: operations.SearchTypePointOceanOoiDmgxRequest) -> operations.SearchTypePointOceanOoiDmgxResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_ocean_ooi_dmgx"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointOceanOoiDmgxResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_openaq(self, request: operations.SearchTypePointOpenaqRequest) -> operations.SearchTypePointOpenaqResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_openaq"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointOpenaqResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_pbo_position_time_series(self, request: operations.SearchTypePointPboPositionTimeSeriesRequest) -> operations.SearchTypePointPboPositionTimeSeriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_pbo_position_time_series"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointPboPositionTimeSeriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_simple_records(self, request: operations.SearchTypePointSimpleRecordsRequest) -> operations.SearchTypePointSimpleRecordsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_simple_records"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointSimpleRecordsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_snotel(self, request: operations.SearchTypePointSnotelRequest) -> operations.SearchTypePointSnotelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_snotel"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointSnotelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_text(self, request: operations.SearchTypePointTextRequest) -> operations.SearchTypePointTextResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_text"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointTextResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_point_wsbb_ggp(self, request: operations.SearchTypePointWsbbGgpRequest) -> operations.SearchTypePointWsbbGgpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_point_wsbb_ggp"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePointWsbbGgpResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_psd_monthly_climate_index(self, request: operations.SearchTypePsdMonthlyClimateIndexRequest) -> operations.SearchTypePsdMonthlyClimateIndexResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_psd_monthly_climate_index"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypePsdMonthlyClimateIndexResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_quandl_series(self, request: operations.SearchTypeQuandlSeriesRequest) -> operations.SearchTypeQuandlSeriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_quandl_series"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeQuandlSeriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_service_group(self, request: operations.SearchTypeServiceGroupRequest) -> operations.SearchTypeServiceGroupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_service_group"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeServiceGroupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_service_link(self, request: operations.SearchTypeServiceLinkRequest) -> operations.SearchTypeServiceLinkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_service_link"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeServiceLinkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_socrata_series(self, request: operations.SearchTypeSocrataSeriesRequest) -> operations.SearchTypeSocrataSeriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_socrata_series"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeSocrataSeriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_sounding_cod(self, request: operations.SearchTypeSoundingCodRequest) -> operations.SearchTypeSoundingCodResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_sounding_cod"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeSoundingCodResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_sounding_frd(self, request: operations.SearchTypeSoundingFrdRequest) -> operations.SearchTypeSoundingFrdResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_sounding_frd"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeSoundingFrdResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_sounding_gsd(self, request: operations.SearchTypeSoundingGsdRequest) -> operations.SearchTypeSoundingGsdResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_sounding_gsd"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeSoundingGsdResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_sounding_wyoming(self, request: operations.SearchTypeSoundingWyomingRequest) -> operations.SearchTypeSoundingWyomingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_sounding_wyoming"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeSoundingWyomingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_tmy(self, request: operations.SearchTypeTmyRequest) -> operations.SearchTypeTmyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_tmy"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeTmyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_tweet(self, request: operations.SearchTypeTweetRequest) -> operations.SearchTypeTweetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_tweet"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeTweetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_usgs_gauge(self, request: operations.SearchTypeUsgsGaugeRequest) -> operations.SearchTypeUsgsGaugeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_usgs_gauge"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeUsgsGaugeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_virtual(self, request: operations.SearchTypeVirtualRequest) -> operations.SearchTypeVirtualResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_virtual"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeVirtualResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_wms_capabilities(self, request: operations.SearchTypeWmsCapabilitiesRequest) -> operations.SearchTypeWmsCapabilitiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_wms_capabilities"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeWmsCapabilitiesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_type_wms_layer(self, request: operations.SearchTypeWmsLayerRequest) -> operations.SearchTypeWmsLayerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/type_wms_layer"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchTypeWmsLayerResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_ufo_sightings(self, request: operations.SearchUfoSightingsRequest) -> operations.SearchUfoSightingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/ufo_sightings"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchUfoSightingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_us_places(self, request: operations.SearchUsPlacesRequest) -> operations.SearchUsPlacesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/us_places"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchUsPlacesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_vote_yesno(self, request: operations.SearchVoteYesnoRequest) -> operations.SearchVoteYesnoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/vote_yesno"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchVoteYesnoResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_weblog(self, request: operations.SearchWeblogRequest) -> operations.SearchWeblogResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/weblog"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchWeblogResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def search_wikipage(self, request: operations.SearchWikipageRequest) -> operations.SearchWikipageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/repository/search/type/wikipage"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchWikipageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    