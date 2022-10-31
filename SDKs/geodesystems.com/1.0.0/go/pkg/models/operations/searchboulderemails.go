package operations

import (
"time")

type SearchBoulderEmailsQueryParams struct {
    ChangedateFrom *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
    ChangedateTo *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
    CreatedateFrom *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
    CreatedateTo *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
    Description *string `queryParam:"style=form,explode=true,name=description"`
    Filesuffix *string `queryParam:"style=form,explode=true,name=filesuffix"`
    Fromdate *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
    Group *string `queryParam:"style=form,explode=true,name=group"`
    Max *int64 `queryParam:"style=form,explode=true,name=max"`
    Maxlatitude *float32 `queryParam:"style=form,explode=true,name=maxlatitude"`
    Maxlongitude *float32 `queryParam:"style=form,explode=true,name=maxlongitude"`
    Minlatitude *float32 `queryParam:"style=form,explode=true,name=minlatitude"`
    Minlongitude *float32 `queryParam:"style=form,explode=true,name=minlongitude"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    SearchDbBoulderEmailsEmailSubject *string `queryParam:"style=form,explode=true,name=search.db_boulder_emails.email_subject"`
    SearchDbBoulderEmailsPlainTextBody *string `queryParam:"style=form,explode=true,name=search.db_boulder_emails.plain_text_body"`
    SearchDbBoulderEmailsReceivedDate *string `queryParam:"style=form,explode=true,name=search.db_boulder_emails.received_date"`
    SearchDbBoulderEmailsSentCc *string `queryParam:"style=form,explode=true,name=search.db_boulder_emails.sent_cc"`
    SearchDbBoulderEmailsSentFrom *string `queryParam:"style=form,explode=true,name=search.db_boulder_emails.sent_from"`
    SearchDbBoulderEmailsSentTo *string `queryParam:"style=form,explode=true,name=search.db_boulder_emails.sent_to"`
    Skip *int64 `queryParam:"style=form,explode=true,name=skip"`
    Text *string `queryParam:"style=form,explode=true,name=text"`
    Todate *time.Time `queryParam:"style=form,explode=true,name=todate"`
    
}

type SearchBoulderEmailsRequest struct {
    QueryParams SearchBoulderEmailsQueryParams 
    
}

type SearchBoulderEmailsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

