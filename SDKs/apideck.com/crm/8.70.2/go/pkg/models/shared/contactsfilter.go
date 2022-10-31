package shared



type ContactsFilter struct {
    Email *string `queryParam:"name=email"`
    FirstName *string `queryParam:"name=first_name"`
    LastName *string `queryParam:"name=last_name"`
    Name *string `queryParam:"name=name"`
    
}

